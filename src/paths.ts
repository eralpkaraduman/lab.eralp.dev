type PathDictionary = { [pathname: string]: string };

export const SidebarPaths: PathDictionary = {
  brython: "/brython",
  box: "/box"
};

const Paths: PathDictionary = {
  virus: "/virus",
  home: "/",
  ...SidebarPaths
};

export default Paths;
