import type {
  CSSProperties,
  ElementType,
  FC,
  HTMLAttributes,
  RefAttributes,
} from "react";

interface MadeLabMainProps
  extends HTMLAttributes<HTMLOrSVGElement>,
    RefAttributes<SVGSVGElement> {
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
}

const MadeLabMain: FC<MadeLabMainProps> = ({
  as: Tag = "section",
  ...otherProps
}) => {
  return <Tag {...otherProps} />;
};

export default MadeLabMain;
