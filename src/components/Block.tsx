interface BlockProps {
  value: string | null;
  onClick?: () => void;
}

const Block = (props: BlockProps) => {
  return (
    <div onClick={props.onClick} className="block">
      {props.value}
    </div>
  );
};

export default Block;
