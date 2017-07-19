import React = require("react");

interface ComponentProps {
    values: string[];
    showSubtrees: boolean;
    onClose(): void;
}

interface ComponentState {
    selectionIndex: number;
}

class Component extends React.Component<ComponentProps, ComponentState> {
    constructor() {
        super();
        this.state = {
            selectionIndex: 0,
        }
    }

    render() {
        const { values, ...rest } = this.props;

        return (
            <ul style={ styles.list }>
                { values.map((val, index) => <ListItem value={ val } />).join("") }
            </ul>
        );
    }
}

interface ListItemProps {
    value: string;
    highlighted?: boolean;
}

const ListItem = (props: ListItemProps) => (
    <li style={ styles.item(props.highlighted) }>
        { props.value.toUpperCase() }
    </li>
)

const styles = {
    list: {
        alignContent: "center"
    } as React.CSSProperties,

    item(highlighted = false): React.CSSProperties {
        if (highlighted) {
            return {
                backgroundColor: "yellow"
            };
        }

        return {};
    }
}
