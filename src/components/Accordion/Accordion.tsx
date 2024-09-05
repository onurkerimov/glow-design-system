import React, { Ref } from 'react';
import * as AccordionRadix from '@radix-ui/react-accordion';
import { cx, cva, VariantProps } from 'class-variance-authority';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './styles.css';


const getRootClass = cva('AccordionRoot', {
  variants: {
    variant: {
      outlined: 'glow-borders',
      contained: 'contained glow-full',
    },
  },
  defaultVariants: {
    variant: 'outlined'
  }
})

type AccordionItem = {
  id: string;
  title: string;
  content: string;
}

const Accordion = (props: VariantProps<typeof getRootClass> & { items: AccordionItem[], defaultValue?: string, onValueChange?: any, value?: any }) => { 
  const { variant = 'outlined', items } = props
  return (
  <AccordionRadix.Root className={getRootClass(props)} type="single" defaultValue={props.defaultValue} value={props.value} onValueChange={props.onValueChange}>
    {items.map((item, index) => (<>
      {index !== 0 && <div className='glow-hr'/>}
      <AccordionRadix.Item className="AccordionItem" value={item.id}>
        <AccordionTrigger className={cx({ 'glow-text': variant === 'outlined' })}>{item.title}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </AccordionRadix.Item>
    </>))}
  </AccordionRadix.Root>
)};

const AccordionTrigger = React.forwardRef(({ children, className, ...props } : AccordionRadix.AccordionTriggerProps, forwardedRef: Ref<HTMLButtonElement>) => (
  <AccordionRadix.Header className="AccordionHeader">
    <AccordionRadix.Trigger
      className={cx('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </AccordionRadix.Trigger>
  </AccordionRadix.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }: AccordionRadix.AccordionContentProps, forwardedRef: Ref<HTMLDivElement>) => (
  <AccordionRadix.Content
    className={cx('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </AccordionRadix.Content>
));

// const AccordionContent = box(
//   AccordionRadix.Content, 
//   (children) => ({ 
//     className: cx('AccordionContent', className),
//     children: <div className="AccordionContentText">{children}</div>
//   })
// )

export default Accordion;