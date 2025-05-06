import './button.scss';

interface Props {
  item: React.ReactNode;
  icon: React.ReactNode;
  toggle: () => void;
  open: boolean;
}
export const Button: React.FC<Props> = ({ item, icon, toggle, open }) => {
  return (
    <div className={`button ${open ? 'button-open' : null}`} onClick={toggle}>
      <div className="item">{item}</div>
      <div className={`${open ? 'icon-open' : 'icon-close'}`}>{icon}</div>
    </div>
  );
};
