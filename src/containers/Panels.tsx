import * as React from 'react';
import DocumentPanel from './DocumentPanel';
import LayerPanel from './LayerPanel';
import ToolPanel from './ToolPanel';

const Panels: React.SFC = _ => (
    <React.Fragment>
        <div className="leftpanel">
            <ToolPanel />
            <LayerPanel />
        </div>
        <DocumentPanel />
    </React.Fragment>
);

export default Panels;
