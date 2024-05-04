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

const Accordion = (props: VariantProps<typeof getRootClass>) => { 
  const { variant = 'outlined' } = props
  return (
  <AccordionRadix.Root className={getRootClass(props)} type="single" defaultValue="item-1" collapsible>
    <AccordionRadix.Item className="AccordionItem" value="item-1">
      <AccordionTrigger className={cx({ 'glow-text': variant === 'outlined' })}>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionRadix.Item>

    <div className='glow-hr'/>

    <AccordionRadix.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent className='glow-text'>
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </AccordionContent>
    </AccordionRadix.Item>

    <div className='glow-hr'/>

    <AccordionRadix.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionRadix.Content className="AccordionContent">
        <div className="AccordionContentText">
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </AccordionRadix.Content>
    </AccordionRadix.Item>
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

export default Accordion;