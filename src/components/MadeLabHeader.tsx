import type {
  CSSProperties,
  ElementType,
  FC,
  HTMLAttributes,
  RefAttributes,
} from "react";

interface MadeLabHeaderProps
  extends HTMLAttributes<HTMLOrSVGElement>,
    RefAttributes<SVGSVGElement> {
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
}
const MadeLabHeader: FC<MadeLabHeaderProps> = ({
  as: Tag = "section",
  ...otherProps
}) => {
  return <Tag {...otherProps} />;
};

export default MadeLabHeader;
