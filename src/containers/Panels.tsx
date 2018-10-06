import * as React from 'react';
import DocumentPanel from './DocumentPanel';
import LayerPanel from './LayerPanel';

const Panels: React.SFC = _ => (
    <React.Fragment>
        <LayerPanel />
        <DocumentPanel />
    </React.Fragment>
);

export default Panels;
