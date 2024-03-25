
const Header = ({title , subtitle}:{title:string,subtitle?:string}) => {
    return(
        <>
              <h2 className="h2-bold text-dark-600">{title}</h2>
              {subtitle && <p className="text-dark-400 p-16-regular mt-6">{subtitle}</p>}
        </>
    )
}
export default Header;