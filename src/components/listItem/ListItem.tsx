import "./ListItem.scss";

export interface ListItemProps {
    text: string;
}

const ListItem = ({ text }: ListItemProps) => {
    return (
        <div className="list-item">{text}</div>
    );
};

export default ListItem;