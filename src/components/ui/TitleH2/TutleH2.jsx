export const TitleH2 = ({ title, subTitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subTitle && <h3>{subTitle}</h3>}
    </div>
  );
};
