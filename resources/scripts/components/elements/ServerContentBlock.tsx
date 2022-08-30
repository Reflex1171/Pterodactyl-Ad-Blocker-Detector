import PageContentBlock, { PageContentBlockProps } from '@/components/elements/PageContentBlock';
import React from 'react';
import { ServerContext } from '@/state/server';
import { useDetectAdBlock } from 'adblock-detect-react';
import AdBlockDetectedFrame from './AdBlockDetected'

interface Props extends PageContentBlockProps {
    title: string;
}

const ServerContentBlock: React.FC<Props> = ({ title, children, ...props }) => {
    const name = ServerContext.useStoreState((state) => state.server.data!.name);
    const adBlockDetected = useDetectAdBlock();

    return (
        <PageContentBlock title={`${name} | ${title}`} {...props}>
            {!adBlockDetected && <div>{children}</div>}
            {adBlockDetected && <AdBlockDetectedFrame/>}
        </PageContentBlock>
    );
};

export default ServerContentBlock;
