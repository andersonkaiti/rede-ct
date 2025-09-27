'use client'

import { RocketIcon } from '@components/icons/rocket'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import Image from 'next/image'
import { tabsData } from './purposes'

export function OurPurpose() {
  return (
    <section className="flex flex-col space-y-12">
      <h2 className="title-2 mx-auto inline-flex items-center gap-2 text-center">
        Missão, valores, objetivos e grandes desafios da RedeCT{' '}
        <span aria-label="alvo" role="img">
          <RocketIcon className="text-primary" />
        </span>
      </h2>
      <Tabs className="items-center space-y-4" defaultValue={tabsData[0].value}>
        <TabsList className="flex w-full flex-col gap-1 bg-transparent sm:flex-row">
          {tabsData.map((tab) => (
            <TabsTrigger
              className="w-full rounded-full border border-background data-[state=active]:border-border data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-none dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
              key={tab.value}
              value={tab.value}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabsData.map((tab) => (
          <TabsContent className="space-y-4" key={tab.value} value={tab.value}>
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="flex-1 space-y-4">
                <div className="relative h-100 w-full">
                  <Image
                    alt={tab.image.alt}
                    className="absolute rounded-xl object-cover"
                    fill
                    src={tab.image.src}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-bold">Foto</p>
                  <p className="font-bold">/</p>
                  <span className="text-background-foreground text-sm">
                    {tab.image.credit}
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-4 text-[18px] text-background-foreground">
                {tab.content.title && (
                  <p className="font-bold">{tab.content.title}</p>
                )}

                {tab.content.paragraphs?.map((paragraph, index) => (
                  <p className="text-justify" key={index}>
                    {paragraph}
                  </p>
                ))}

                {tab.content.lists?.map((list, listIndex) => (
                  <div className="space-y-2" key={listIndex}>
                    <p className="font-bold">{list.title}</p>
                    <ul className="ml-5 list-disc">
                      {list.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
