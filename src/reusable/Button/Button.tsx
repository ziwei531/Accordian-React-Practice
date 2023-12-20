import "./Button.css";

type Props = {
    isExpanded: boolean;
    clickFunc: () => void;
};

export const Button = ({ isExpanded, clickFunc }: Props) => {
    return (
        <>
            <div>
                <button className="button-container" onClick={clickFunc}>
                    {isExpanded ? "-" : "+"}
                </button>
            </div>
        </>
    );
};
