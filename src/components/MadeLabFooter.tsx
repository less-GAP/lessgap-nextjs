import type {
  CSSProperties,
  ElementType,
  FC,
  HTMLAttributes,
  RefAttributes,
} from "react";

interface MadeLabFooterProps
  extends HTMLAttributes<HTMLOrSVGElement>,
    RefAttributes<SVGSVGElement> {
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
}
const MadeLabFooter: FC<MadeLabFooterProps> = ({
  as: Tag = "section",
  ...otherProps
}) => {
  return <Tag {...otherProps} />;
};

export default MadeLabFooter;
