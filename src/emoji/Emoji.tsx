const Emoji = (props: any) => (
    <span
        className="emoji"
        role="img"
    >
        {props.symbol}
    </span>
);

export default Emoji;
