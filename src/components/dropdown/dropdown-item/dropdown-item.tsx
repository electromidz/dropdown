import './dropdown-item.scss';
import { FaCheck } from 'react-icons/fa6';

interface Props {
  item: React.ReactNode;
  icon: React.ReactNode;
  newItem?: boolean;
}

export const DropdownListItem: React.FC<Props> = ({ item, icon, newItem }) => {
  return (
    <span className={`list ${newItem ? 'new' : null}`}>
      <div className="content">
        <div className="uppercase">{item}</div>
        <div>{icon}</div>
      </div>
      <div className="check">{newItem ? <FaCheck color="rgba(59, 130, 246)" /> : <></>}</div>
    </span>
  );
};
