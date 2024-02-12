import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  let { pathname } = useLocation();
  let pathnames = pathname.split("/").filter((x) => x);
  let breadname = "";

  return (
    <div>
      {pathnames.length > 0 && <Link to="/">Home</Link>}
      {pathnames.map((name, index) => {
        breadname += `/${name}`;

        let isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={breadname}>/ {name}</span>
        ) : (
          <span key={breadname}>
            <Link to={breadname}>/ {name} </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
