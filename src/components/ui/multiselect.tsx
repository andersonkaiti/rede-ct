'use client'

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@components/ui/command'
import { cn } from '@utils/cn'
import { Command as CommandPrimitive, useCommandState } from 'cmdk'
import { XIcon } from 'lucide-react'
import * as React from 'react'
import { useEffect } from 'react'

export interface Option {
  value: string
  label: string
  disable?: boolean
  fixed?: boolean
  [key: string]: string | boolean | undefined
}
interface GroupOption {
  [key: string]: Option[]
}

interface MultipleSelectorProps {
  value?: Option[]
  defaultOptions?: Option[]
  options?: Option[]
  placeholder?: string
  loadingIndicator?: React.ReactNode
  emptyIndicator?: React.ReactNode
  delay?: number
  triggerSearchOnFocus?: boolean
  onSearch?: (value: string) => Promise<Option[]>
  onSearchSync?: (value: string) => Option[]
  onChange?: (options: Option[]) => void
  maxSelected?: number
  onMaxSelected?: (maxLimit: number) => void
  hidePlaceholderWhenSelected?: boolean
  disabled?: boolean
  groupBy?: string
  className?: string
  badgeClassName?: string
  selectFirstItem?: boolean
  creatable?: boolean
  commandProps?: React.ComponentPropsWithoutRef<typeof Command>
  inputProps?: Omit<
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>,
    'value' | 'placeholder' | 'disabled'
  >
  hideClearAllButton?: boolean
}

export interface MultipleSelectorRef {
  selectedValue: Option[]
  input: HTMLInputElement
  focus: () => void
  reset: () => void
}

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

function transToGroupOption(options: Option[], groupBy?: string) {
  if (options.length === 0) {
    return {}
  }
  if (!groupBy) {
    return {
      '': options,
    }
  }

  const groupOption: GroupOption = {}
  for (const option of options) {
    const key = (option[groupBy] as string) || ''
    if (!groupOption[key]) {
      groupOption[key] = []
    }
    groupOption[key].push(option)
  }
  return groupOption
}

function removePickedOption(groupOption: GroupOption, picked: Option[]) {
  const cloneOption = JSON.parse(JSON.stringify(groupOption)) as GroupOption

  for (const [key, value] of Object.entries(cloneOption)) {
    cloneOption[key] = value.filter(
      (val) => !picked.find((p) => p.value === val.value),
    )
  }
  return cloneOption
}

function isOptionsExist(groupOption: GroupOption, targetOption: Option[]) {
  for (const [, value] of Object.entries(groupOption)) {
    if (
      value.some((option) => targetOption.find((p) => p.value === option.value))
    ) {
      return true
    }
  }
  return false
}

function CommandEmpty(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props
  const render = useCommandState((state) => state.filtered.count === 0)

  if (!render) {
    return null
  }

  return (
    <div
      className={cn('px-2 py-4 text-center text-sm', className)}
      role="presentation"
      {...rest}
    />
  )
}

CommandEmpty.displayName = 'CommandEmpty'

function MultipleSelector(props: MultipleSelectorProps) {
  const {
    value,
    onChange,
    placeholder,
    defaultOptions: arrayDefaultOptions = [],
    options: arrayOptions,
    delay,
    onSearch,
    onSearchSync,
    loadingIndicator,
    emptyIndicator,
    maxSelected = Number.MAX_SAFE_INTEGER,
    onMaxSelected,
    hidePlaceholderWhenSelected,
    disabled,
    groupBy,
    className,
    badgeClassName,
    selectFirstItem = true,
    creatable = false,
    triggerSearchOnFocus = false,
    commandProps,
    inputProps,
    hideClearAllButton = false,
  } = props

  const inputRef = React.useRef<HTMLInputElement>(null)
  const [open, setOpen] = React.useState(false)
  const [onScrollbar, setOnScrollbar] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const [selected, setSelected] = React.useState<Option[]>(value || [])
  const [options, setOptions] = React.useState<GroupOption>(
    transToGroupOption(arrayDefaultOptions, groupBy),
  )
  const [inputValue, setInputValue] = React.useState('')
  const debouncedSearchTerm = useDebounce(inputValue, delay || 500)

  function handleClickOutside(event: MouseEvent | TouchEvent) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setOpen(false)
      inputRef.current.blur()
    }
  }

  const handleUnselect = React.useCallback(
    (option: Option) => {
      const newOptions = selected.filter((s) => s.value !== option.value)
      setSelected(newOptions)
      onChange?.(newOptions)
    },
    [onChange, selected],
  )

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (input) {
        if (
          (e.key === 'Delete' || e.key === 'Backspace') &&
          input.value === '' &&
          selected.length > 0
        ) {
          const lastSelectOption = selected[selected.length - 1]
          if (!lastSelectOption.fixed) {
            handleUnselect(selected[selected.length - 1])
          }
        }
        if (e.key === 'Escape') {
          input.blur()
        }
      }
    },
    [handleUnselect, selected],
  )

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchend', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchend', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchend', handleClickOutside)
    }
  }, [open])

  useEffect(() => {
    if (value) {
      setSelected(value)
    }
  }, [value])

  useEffect(() => {
    if (!arrayOptions || onSearch) {
      return
    }
    const newOption = transToGroupOption(arrayOptions || [], groupBy)
    if (JSON.stringify(newOption) !== JSON.stringify(options)) {
      setOptions(newOption)
    }
  }, [arrayDefaultOptions, arrayOptions, groupBy, onSearch, options])

  useEffect(() => {
    function doSearchSync() {
      const res = onSearchSync?.(debouncedSearchTerm)
      setOptions(transToGroupOption(res || [], groupBy))
    }

    function exec() {
      if (!(onSearchSync && open)) {
        return
      }

      if (triggerSearchOnFocus) {
        doSearchSync()
      }

      if (debouncedSearchTerm) {
        doSearchSync()
      }
    }

    exec()
  }, [debouncedSearchTerm, groupBy, open, triggerSearchOnFocus])

  useEffect(() => {
    async function doSearch() {
      setIsLoading(true)
      const res = await onSearch?.(debouncedSearchTerm)
      setOptions(transToGroupOption(res || [], groupBy))
      setIsLoading(false)
    }

    async function exec() {
      if (!(onSearch && open)) {
        return
      }

      if (triggerSearchOnFocus) {
        await doSearch()
      }

      if (debouncedSearchTerm) {
        await doSearch()
      }
    }

    exec()
  }, [debouncedSearchTerm, groupBy, open, triggerSearchOnFocus])

  function CreatableItem() {
    if (!creatable) {
      return null
    }
    if (
      isOptionsExist(options, [{ value: inputValue, label: inputValue }]) ||
      selected.find((s) => s.value === inputValue)
    ) {
      return null
    }

    const Item = (
      <CommandItem
        className="cursor-pointer"
        onMouseDown={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
        onSelect={(value: string) => {
          if (selected.length >= maxSelected) {
            onMaxSelected?.(selected.length)
            return
          }
          setInputValue('')
          const newOptions = [...selected, { value, label: value }]
          setSelected(newOptions)
          onChange?.(newOptions)
        }}
        value={inputValue}
      >
        {`Create "${inputValue}"`}
      </CommandItem>
    )

    if (!onSearch && inputValue.length > 0) {
      return Item
    }

    if (onSearch && debouncedSearchTerm.length > 0 && !isLoading) {
      return Item
    }

    return null
  }

  const EmptyItem = React.useCallback(
    function EmptyItemFn() {
      if (!emptyIndicator) {
        return null
      }

      if (onSearch && !creatable && Object.keys(options).length === 0) {
        return (
          <CommandItem disabled value="-">
            {emptyIndicator}
          </CommandItem>
        )
      }

      return <CommandEmpty>{emptyIndicator}</CommandEmpty>
    },
    [creatable, emptyIndicator, onSearch, options],
  )

  const selectables = React.useMemo<GroupOption>(
    () => removePickedOption(options, selected),
    [options, selected],
  )

  const commandFilter = React.useCallback(() => {
    if (commandProps?.filter) {
      return commandProps.filter
    }

    if (creatable) {
      return (value: string, search: string) =>
        value.toLowerCase().includes(search.toLowerCase()) ? 1 : -1
    }
    return
  }, [creatable, commandProps?.filter])

  return (
    <Command
      ref={dropdownRef}
      {...commandProps}
      className={cn(
        'h-auto overflow-visible bg-transparent',
        commandProps?.className,
      )}
      filter={commandFilter()}
      onKeyDown={(e) => {
        handleKeyDown(e)
        commandProps?.onKeyDown?.(e)
      }}
      shouldFilter={
        commandProps?.shouldFilter !== undefined
          ? commandProps.shouldFilter
          : !onSearch
      }
    >
      <div
        className={cn(
          'relative min-h-[38px] rounded-md border border-input text-sm outline-none transition-[color,box-shadow] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-aria-invalid:border-destructive has-disabled:opacity-50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40',
          {
            'p-1': selected.length !== 0,
            'cursor-text': !disabled && selected.length !== 0,
          },
          !hideClearAllButton && 'pe-9',
          className,
        )}
        onClick={() => {
          if (disabled) return
          inputRef?.current?.focus()
        }}
      >
        <div className="flex flex-wrap gap-1">
          {selected.map((option) => (
            <div
              className={cn(
                'relative inline-flex h-7 animate-fadeIn cursor-default items-center rounded-md border bg-background ps-2 pe-7 pl-2 font-medium text-secondary-foreground text-xs transition-all hover:bg-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-fixed:pe-2',
                badgeClassName,
              )}
              data-disabled={disabled || undefined}
              data-fixed={option.fixed}
              key={option.value}
            >
              {option.label}
              <button
                aria-label="Remove"
                className="-inset-y-px -end-px absolute flex size-7 items-center justify-center rounded-e-md border border-transparent p-0 text-muted-foreground/80 outline-none outline-hidden transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                onClick={() => {
                  handleUnselect(option)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleUnselect(option)
                  }
                }}
                onMouseDown={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                }}
              >
                <XIcon aria-hidden="true" size={14} />
              </button>
            </div>
          ))}
          <CommandPrimitive.Input
            {...inputProps}
            className={cn(
              'flex-1 bg-transparent outline-hidden placeholder:text-muted-foreground/70 disabled:cursor-not-allowed',
              {
                'w-full': hidePlaceholderWhenSelected,
                'px-3 py-2': selected.length === 0,
                'ml-1': selected.length !== 0,
              },
              inputProps?.className,
            )}
            disabled={disabled}
            onBlur={(event) => {
              if (!onScrollbar) {
                setOpen(false)
              }
              inputProps?.onBlur?.(event)
            }}
            onFocus={(event) => {
              setOpen(true)
              if (triggerSearchOnFocus) {
                onSearch?.(debouncedSearchTerm)
              }
              inputProps?.onFocus?.(event)
            }}
            onValueChange={(value) => {
              setInputValue(value)
              inputProps?.onValueChange?.(value)
            }}
            placeholder={
              hidePlaceholderWhenSelected && selected.length !== 0
                ? ''
                : placeholder
            }
            ref={inputRef}
            value={inputValue}
          />
          <button
            aria-label="Clear all"
            className={cn(
              'absolute end-0 top-0 flex size-9 items-center justify-center rounded-md border border-transparent text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
              (hideClearAllButton ||
                disabled ||
                selected.length < 1 ||
                selected.filter((s) => s.fixed).length === selected.length) &&
                'hidden',
            )}
            onClick={() => {
              setSelected(selected.filter((s) => s.fixed))
              onChange?.(selected.filter((s) => s.fixed))
            }}
            type="button"
          >
            <XIcon aria-hidden="true" size={16} />
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className={cn(
            'absolute top-2 z-10 w-full overflow-hidden rounded-md border border-input',
            'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=open]:animate-in',
            !open && 'hidden',
          )}
          data-state={open ? 'open' : 'closed'}
        >
          {open && (
            <CommandList
              className="bg-background text-popover-foreground shadow-lg outline-hidden"
              onMouseEnter={() => {
                setOnScrollbar(true)
              }}
              onMouseLeave={() => {
                setOnScrollbar(false)
              }}
              onMouseUp={() => {
                inputRef?.current?.focus()
              }}
            >
              {isLoading ? (
                <>{loadingIndicator}</>
              ) : (
                <>
                  {EmptyItem()}
                  {CreatableItem()}
                  {!selectFirstItem && (
                    <CommandItem className="hidden" value="-" />
                  )}
                  {Object.entries(selectables).map(([key, dropdowns]) => (
                    <CommandGroup
                      className="h-full overflow-auto"
                      heading={key}
                      key={key}
                    >
                      <>
                        {dropdowns.map((option) => (
                          <CommandItem
                            className={cn(
                              'cursor-pointer',
                              option.disable &&
                                'pointer-events-none cursor-not-allowed opacity-50',
                            )}
                            disabled={option.disable}
                            key={option.value}
                            onMouseDown={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                            }}
                            onSelect={() => {
                              if (selected.length >= maxSelected) {
                                onMaxSelected?.(selected.length)
                                return
                              }
                              setInputValue('')
                              const newOptions = [...selected, option]
                              setSelected(newOptions)
                              onChange?.(newOptions)
                            }}
                            value={option.value}
                          >
                            {option.label}
                          </CommandItem>
                        ))}
                      </>
                    </CommandGroup>
                  ))}
                </>
              )}
            </CommandList>
          )}
        </div>
      </div>
    </Command>
  )
}

MultipleSelector.displayName = 'MultipleSelector'
export default MultipleSelector
