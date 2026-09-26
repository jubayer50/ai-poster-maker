import Link from "next/link";

type MyNavLinkProps = {
  href: string;
  children: string;
  pathName: string;
};

const MyNavLink = ({ href, children, pathName }: MyNavLinkProps) => {
  return (
    <Link
      href={href}
      className={`${pathName === href ? "font-bold bg-emerald-500/15" : ""} px-3 py-1.5 rounded-full text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white`}
    >
      <li>{children}</li>
    </Link>
  );
};

export default MyNavLink;
