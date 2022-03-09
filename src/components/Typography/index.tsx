import React, {FC} from 'react';
import css from "./Typography.module.scss";

interface Props {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}
export const EmptyText: FC<Props> = ({
  onClick
}) => {

  return (
    <div className={css.inlineEmpty} onClick={onClick}></div>
  );
};