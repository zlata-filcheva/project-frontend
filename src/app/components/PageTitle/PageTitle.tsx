const PageTitle = ({ title }: { title: string }) => (
  <div>
    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mt-3">
      {title}
    </h2>
  </div>
);

export default PageTitle;
