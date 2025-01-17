'use client';
import React from 'react';
import { clsx } from 'clsx';
import { customClassSwitcher } from '~/core';

const COMPONENT_NAME = 'BlockQuote';

export type BlockQuoteProps = {
    children: React.ReactNode;
    customRootClass?: string;
    className?: string;
    props?: Record<string, any>[]
}
const BlockQuote = ({ children, customRootClass = '', className = '', ...props }: BlockQuoteProps) => {
    const rootClass = customClassSwitcher(customRootClass, COMPONENT_NAME);

    return <blockquote className={clsx(rootClass, className)} {...props}>{children}</blockquote>;
};

BlockQuote.displayName = COMPONENT_NAME;

export default BlockQuote;
