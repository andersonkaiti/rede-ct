'use client'

import { Button } from '@components/ui/button'
import { Separator } from '@components/ui/separator'
import { Toggle } from '@components/ui/toggle'
import Heading from '@tiptap/extension-heading'
import ListItem from '@tiptap/extension-list-item'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { cn } from '@utils/cn'
import {
  Bold,
  Code,
  Heading1,
  Italic,
  List,
  Minus,
  Redo,
  Strikethrough,
  Undo,
} from 'lucide-react'

export interface RichTextEditorProps {
  content?: string
  onChange?: (content: string) => void
  placeholder?: string
  editable?: boolean
  className?: string
}

export function RichTextEditor({
  content = '',
  onChange,
  placeholder = 'Start typing...',
  editable = true,
  className,
}: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: false,
        listItem: false,
      }),
      Heading.configure({
        HTMLAttributes: {
          class: 'text-xl font-bold',
        },
      }),
      ListItem.configure({
        HTMLAttributes: {
          class: 'list-disc ml-5',
        },
      }),
    ],
    content,
    editable,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: cn('mx-auto focus:outline-none', 'min-h-[200px] p-4 border-0'),
      },
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className={cn('overflow-hidden rounded-lg border', className)}>
      <div className="flex flex-wrap items-center gap-1 border-b p-2">
        <Toggle
          type="button"
          size="sm"
          pressed={editor.isActive('bold')}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
        >
          <Bold className="size-4" />
        </Toggle>

        <Toggle
          type="button"
          size="sm"
          pressed={editor.isActive('italic')}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
        >
          <Italic className="size-4" />
        </Toggle>

        <Toggle
          type="button"
          size="sm"
          pressed={editor.isActive('strike')}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="size-4" />
        </Toggle>

        <Toggle
          type="button"
          size="sm"
          pressed={editor.isActive('code')}
          onPressedChange={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
        >
          <Code className="size-4" />
        </Toggle>

        <Separator orientation="vertical" className="h-6" />

        <Toggle
          type="button"
          size="sm"
          pressed={editor.isActive('heading', { level: 1 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <Heading1 className="size-4" />
        </Toggle>

        <Separator orientation="vertical" className="h-6" />

        <Toggle
          type="button"
          size="sm"
          pressed={editor.isActive('bulletList')}
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
        >
          <List className="size-4" />
        </Toggle>

        <Separator orientation="vertical" className="h-6" />

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Minus className="size-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <Undo className="size-4" />
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <Redo className="size-4" />
        </Button>
      </div>

      <EditorContent editor={editor} placeholder={placeholder} />
    </div>
  )
}
