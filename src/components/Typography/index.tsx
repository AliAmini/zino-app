import React, {FC} from 'react';
import css from "./Typography.module.scss";

export const EmptyText: FC = () => {
  return (
    <div className={css.inlineEmpty}></div>
  );
};