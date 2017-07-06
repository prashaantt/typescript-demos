import React = require("react");

interface ComponentProps {
    values: string[];
    showSubtrees: boolean;
    onClose(): void;
}

interface ComponentState {
    selectionIndex: number;
}

export class Component extends React.Component<ComponentProps, ComponentState> {
    constructor() {
        super();
        this.state = {
            selectionIndex: 0
        }
    }

    shouldComponentUpdate(newProps: ComponentProps) {
        return true;
    }

    renderValue = (s: string) => <span>{ s.toUpperCase() }</span>;

    render() {
        const { values, ...rest } = this.props;

        return (
            <div>
                { values.map(this.renderValue) }
            </div>
        );
    }
}
