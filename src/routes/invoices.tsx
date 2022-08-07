import { themeClass, hero } from "./invoices.css"


import * as Accordion from '@radix-ui/react-accordion';

const KAccordion = ({ items }: { items: { triggerText: string, contentText: string }[] }) => (
  <Accordion.Root type="multiple">
    {items.map((item, index) =>
      <Accordion.Item value={`item-${index}`}>
        <Accordion.Header ><Accordion.Trigger >{item.triggerText}</Accordion.Trigger> </Accordion.Header>
        <Accordion.Content >{item.contentText}</Accordion.Content>
      </Accordion.Item>)}
  </Accordion.Root>

);


export default function Invoices() {
  return (
    <main className={themeClass}>
      <h2 className={hero}>Invoices</h2>
      <KAccordion items={[{
        triggerText: 'hello',
        contentText: 'world'
      }, { triggerText: 'foo', contentText: 'bar' }]} />
    </main>
  );
}
