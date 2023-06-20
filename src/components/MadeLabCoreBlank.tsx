import type {
	CSSProperties,
	ElementType,
	FC,
	HTMLAttributes,
	RefAttributes,
} from "react";

interface MadeLabCoreProps
	extends HTMLAttributes<HTMLOrSVGElement>,
	RefAttributes<SVGSVGElement> {
	as?: ElementType;
	style?: CSSProperties;
	className?: string;
}

const MadeLabCore: FC<MadeLabCoreProps> = ({
	as: Tag = "section",
	...otherProps
}) => {
	return <Tag {...otherProps} />;
};

export default MadeLabCore;
