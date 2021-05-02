import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

export default function Navbar1(){
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const toggle = () => setIsOpen(!isOpen);

    const logout = () =>{
       localStorage.removeItem("status");
       localStorage.removeItem("Authorisation");
       localStorage.removeItem("userName");
       history.push('/');
    }
  
    return (
      <div>
        {
        (localStorage.getItem("Authorisation") === null) ? 
        <Navbar  light expand="md" style={{backgroundColor:"white"}}>
          <NavbarBrand href="/" className="ml-5"><img height="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgsAAABgCAMAAACkLcFMAAAAxlBMVEX///89Ozwov3s54JsuKy03NTYoJicqJyn8/PwkISIwLi+6urq0tLTp6em4t7ciHyGqqanc3NwAu3H39/c0MjPOzc1ubW0s35cWvXXb8uax8dOh7suc3byLiovk+u+gn6AcGBpfXl5BP0BXVlce3pN2dXXh4eHu7u5/fn6y5MqSkZFOTE3FxcVIRkfb+Or0/fl76LfJ7Np30aTJ9eBozZtGxYlO4qOM17EWEhRnZWal38Ff5KpWyZGj7szn9u5w57K88tmL6793VpmcAAAP90lEQVR4nO2d6WLaOBSFIXjBhsQQDGHaUrOEpUCmnbbThul0e/+XGmxs60q6WmxrCG18foKQhfX5Sjpa3Gio9eF7q/XuT1Wqvz5eXb3/QyO7Wr+uft7ftVqt+xfyVO9vr66uxrf/nKdMtZ5EP+5bie6lkeFNjMJRt3Vk+I11d0KhdfdFlmp8lervc5Wr1tn1MmOhdf9BnOpVzsLtm/OVrdZZ9fa+leuTMFX79orojKWrdU69uyMsiAPD5zFBYVx3H39PvQZh4ShBqrcwLFzdts9axFpn0hcKhbsfeKr3Y8jC+PNZi1jrPPpAhwVBYPhGhYVjYPh25mLWOoM+MSjcoYbTv2OahfHHc5ez1v+uF3ctFgYk1R9MWKhkOPW3k5O2K/ar9SJwTgoW69IXwNWOhJetlYhDoXX3kk/1N4tCBcPp+jHM9MjW98ZvZvKXZS8g0MEVXrZWrJc8C617bpDwFxcWjoHhr5KX7Fp5fVsd5ruZnX9nL0rmL9KUXPbGcNa/hd6yHcckMPxkk/EkVDCcdFmYlcxfoHZQsyDVOyQsHAPDWzrVGyQslDecnooFr2ZBptdYWOADwxhDobThVLNwkfqConAMDJR78ErAQknDqWbhEsXZTHlgeAdSvUVbiCQwlDKcahYuUazNBALDa5LqsyAslDWcfmEWeqlDEf120zE/0I7jSd/zVKz7TAWGMobTE40pDbCwdFKDwjXM6dNLggJY7fZRGBauyhlOMhZGYf5dOKr271gZYIGMSqcDs4V7amE2E+kxZKvdePeZCgwlDCcZC8PASxX4hp1iAyyQHLzfiwXUZgKBIV3Uwk5KsSp+YRkLjcY6U8W/x8kAC87vysJPWVhoZavdMPcZqoThJGfhf1PNglACm4kNDMikFNNKFO5S1yxcmkQ2Ex0YVGGhjOFUs3BhEtpMRPFqNxUJVyUMp5qFC5PYZgJq/KPoOCaBoajhVLNwWZLZTHlc+KLRRFwVN5xqFi5LGigkPvS/GiwUNZxqFi5KUpspCwvx/JTcacoCQzHDqWYBV78TbUaH2WG0iTrlfLZ2v3vKYjmJ9td6v1HYTGlYSBa0vNfoMRQ0nIyz0F6vVqtrVe1cNAuD7shzLD+0Y4W+5TjLTsHB+nVvFrhWmGfhhZu9xs9UNlMSFk4rYMUT1kDFDCejLPS3Oz/wHMfxPG8x6UiqyCwLBX/ZHnZ6vV53j5dvtQksMil3km15E81HO9bwEPhsFqHrRypmlTZTwkKaWLSQhW4lijAsZWG1HJ004f7F9Sb9atnPPurNvRDcvtCaHoaiy2qx0D2k1xhtSEX0s8/AJOoIaklfNEu/zJ7L4WF6fOiPch+R4q2XAfgTsC6nG00nvr/wWBBO8oOt/JffdVDId8zosFDIcJKxsJ6eYpxt+zv2d3b2Vfh44qTnWtyft52dgAYdFtZTO5M/zz98zD6D16H0CNv3dpAV9DGBdnAgFYVMxEdTvBoTGoKe5Ebm2kiy8EPh09HQsplaYCcdvvCVDQwFDCcZCx3y3ZSJNddkxtiN/15/zpOQ3O5gg15Wg4UBzOcx+3Trc9dgRWXYz5sSP67JoQsqymYJHyzwf5HJOShDbt/Gw0qmYCL+rY7NBLfea6BQyHDSZCFgWSB1GbPQmzZF8ndYK6nBwg7UmpXfwYn8VnMZAha6x39ElTNkOO1z/QRWYVPRTnTENyIrnXDljabNRGTacDLCwsRrimU3ERjULMxApYOVNJVYGNI15dMxf6isx7gTKe1CRoE6i3AnCC66NhORaglDIn3DyQAL/chpymQ/8JdVsjACbUEI2vUqLAyYmnKpxptHwY47ReyHviQy8CjYIZ9FyHW+EmnbTESGDafqLNgjeSOLLpBTsbABedpzcPEKLHRGTK148Bnv0yiErvcw2myWh2bgUpekSkOrR6PgO94uzmIWBhaVRXhAflzAZiIyazhVZ6GpamSPfa4ue1kFC1sX3lP4JJZnoTlnC+qCdGsqtlnWdpj948FwG0LahUs/6cDiNqN8tL3eTxzY53Uj/tcFbCYis4aTARZy2ZaTLI70XLazzzmDchYimHtAWcCR21QpgA5fX9x+UUPKBzi+cNnBYweODniyE1E0hU3GZmz3oOkw7bO/LmQzERk1nMyxYHmbm35S5+th9EBXAdtjl7NwA2PtlB6RtxfT03JciJvjAT1SxwMgLCTIOlY4BTUOh6rWAensLgGDAdplADsImh4yclwvAE9z9ttiNhORScPJFAthSD8twwcqNkyZ7reMhT2MtQFnhg6SxbiDLsnfuR6sieiK5FgIvU2nv173b7YgZ9hZsHBHBDRbIXYYRRdcSGBKgT0GFpPiz2I2E5FJw8kQCx5/AzcwmofMgyJhgerEOUjLyhVONjfFshDwdvpRC/JMC08dASeTBFyIb7RBl8IR+ZPgMg59Q4vaTEQaKOgaTmZYQB+ECexxufR3YhZWMGdL7NKVYyFAZwuHYFQk3iBGatLmu48ROMMGDyxHDUAiCvLCNhORQcPJCAuCBwG2oC7T7ItYWEOAfMlurVIs4ChQYUGcF/DdA85xIpeRbTfck2QW/FyngRAdFW/OcDLBAtp+HrUGfcCQnqITsTCAI9RQtomzDAtsS5WlIeX0ZKsMtnl7H7ITjuA24j3LVOTxgHe7hM1EZM5wMsGCI6oLaAbQZpuAhTY1tBO7Oo1yLDh4hqSYSPAHAmz7zFdk8sQX9nBiDfNOlE0Mp1I2E5Exw8kAC9xDkqsPUnlUDgIW4LBL6vaWYkFUUPA35cvZiHHp0E0eaD4swW9TkdIEealL2UxExgwnAyx44umaOUnlULcZZ+EAUVDUSwkWHL77H2uYJ1GdMkGuyWDV8wVfcCLtTH67S9pMRHqGk7xcsQywgEw9ZQKNBN15RFlYQktiKlv10SjFAhvYU0V89QgEJrfoP33IA4anWChLGoncfytrMxEZMpyqsyDokCW6EeWOsTCBhgTvMYkLp8mCLejiklGEtNsX66GJJyWM2Ioc2lzS0jYTkZ7hJOxwZKrOgi9Z+dUn1WtRviTCAjXz7Ul7YEzhNFkIBXmCEKe66CYPIVSYIxcR8UZEmk3vhFN5m4lIAwUNw6k6C5ZkGLYGyChY6MJJCInHhBROkwXBopkVqUjl4TPEUaKeANCPUDK8zKPQCacKNhORGcPJzBo3kQai8MGxQE1C6Jw+XZwFQUH3pCKVBIK00FwkHUIfn8OUpNVpIORvJIylZTj9q8jk/2UBNKRyFqi5f61D44qzIBhGkDGAfegpBJwIWEbyrNsbVRYkbRJDvlaxmYiMGE6XwUKfWhEkzREpXDUWyIPatH2F4P4PkAU88E6VBUi6qWwzEZkwnC6ChWt6gYrWTipjLGzUK6UwOSCLuTo5orh7UtFmIjJhOF0AC50BWxuuxgZJYyywqyA1FYCLqvdsoFo0vlW1mYgMGE5Pz0IY7djasLHFoeLCVWNhVo4FDxgMsi0BEj3ohYWv6pvRYN5YKgwMr2RZPD0LTSRGO+pW4slZAM67xq4ITHOtQcSdwlvIpIGCYihxASxgEk59YoWrxsLiyVho1izEUrGgbiUuKS6UbCOagrfHMCyoR5SxZCeF/zptRCaqrRAsPEcLV42FQzkW4G5j1WYhXPZMb4pS7TTF0nKb5HMSl8PCtE+5DJ5qF6spFpZwJZXn6skJofMO/4bv6GbxsGo0PtyJBCODBgzUofFjXLdX8vXQF8PCdE/vUtBfS1CRBTCv7k/KvYpiQYqtjGesfnx9iYnyI++/fH2RiIPizUmfxxQKn19h+ke1zu1SWAiSewhNG8VdNcYCmW8q/ZIMYlGopzR0RfUk0lhxz61iuE0febolKPnm2gthId0HQe2NkLcSxlgAk4xlK7LI3JSusF4lv6IF7TD+2iy4WS1s4f5qaSthjAWw+EDD4kJFbqJ6zlpXz5UFi8xRw4XQruwhM8bCQLy6WVfDAksgdPVMWYDnEax0WwljLDR2JKMC5/ZR/6Y6TpyeJwv0lphIs5UwxwIZSJR+JR7xLkUXKaznyQJzfhGcqeIOQkALV5GFPbZ/pZjIUmr5VpkCepYssF3va+g4iVcmw8JVYwFEeOVC6I21xCwIuPJekcN65iu2UJz0LFngAjPVSgiH/ObiAnAeVU/1xmqGTWwHBNhMrzj3eRc2rYXG+oyahUQLnVZiD1iQdPl0WCCNhGjHZZYwKfUUGd4Awwo/pS1TMmi2NVbx1SycMqcOZhFUNNmA1HQl/TUdFsBTLbWbsqMhHH6Z9poU2ZXt8smOH5oquxU1Cyf1wPpHUSsBNz5IfAgtFnrgj4q5IidphPy2wSU4f0ccW8hyb1dlRNQspNJoJcA2HNlmJS0WqAWLwpoENhhfJhDLxKORa9DF5I9yo1WzkGoNrShBKwGSSLr/eix0SSCyHwQdO3geAHK+C5zuFDzz13CFBnuaGauahbxY6lYCxA6JJ6XHApWZjQ0UVvCkUO6IwgZ9eJePDhT2cOW/8HyvTDULueDKMwvtaIE9Ls1wJtrqrskCbWpw12tv4fc2dzpjrD1IYvN/ar2EWQgPj81Vs5CLaiXQeDqEj5kdLLbdzlFsSk0W6PNF/TCCrc5q61Dr7wRjWPrcuocbGBv6m4B6+YnkzIpUNQugYKCfhY/Z6c1W8Ru+jmLfG6TLAl2TTT/Ybbv7YX+4722oVyc1Jb2+GZXOCmZRZ3hUJ1r6NEyK44cS1SwAHVStBHpMODum0GahsWRWsIZWvCrR8tmrTMXG4o5Oa2dZsKtrHY350JoFoAE8m2OK9AdW2LYEdgGBPgscDLgkKDTaO529mbarMzVes0BdHr6XAGslsJ2QFViQvx4nuxFy93im5sm2tVZJ1CxQAmdpo63ENfJSoCosNLqBYq+E7aveYbvFghUU/v4tXtjOiWfMwgA+ZNgRf8jLjSqx0FjtpM+1qzHBOAylu64DjSNnEqFx4QebCmehwHsIoS6ZhXReMK1kbBi24aJ6NRbiqRBhVfqSlTXwr20FbzuN/yv7ihGxviMw0G8ei/UR2y011r0GIxkLN0/NApzxweclbpjxXmUWGu3Iwl5NaLt+pLuRZj3hX2F8VOjMC6yYf33PwXD/k0uF7aK8faN/FUodMN3HsgAeyynzFZijdWQskGTMZCI4NFfCQhu+jQ6dTh5sParq2DHlapq/1ZZ936pQnUPghvBgat/1ltoPdFKq3iKwYBah71gTnaOHiF5/umeEnc/yx9+3jMba753jtHPDk/wpZ4AsnPQ7h7NMl176lSWZogXJ/Ee690ze2SY94HX/6KcZhI+C2mh3lpYX+wCnVCxZo/nipEOBVantYTSyPc9L3tI+X0bFajHRer89+F7yovfA2216JdbEfntNSZSKUfHrEHWjVMhQ5yb9Colt+/SrntxCy3KI2K7fTfrUzOWrOvrZ76X1sR52eqdUhR5fhQbXR+n1+gVqr6VZ/AerqaBqMxAYAgAAAABJRU5ErkJggg=="/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>        
            </Nav>
            <div className="mr-5">
            <NavbarText className="mr-3"><a href="/login">Login</a></NavbarText>
            <NavbarText><a href="/signup">Signup</a></NavbarText>
            </div>
          </Collapse>
        </Navbar>
      :
      <Navbar  light expand="md" style={{backgroundColor:"white"}}>
      <NavbarBrand href="/" className="ml-5"><img height="20px" src="data:image/png;base64,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"/></NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>        
        </Nav>
        <div className="mr-5">
        <Nav className="mr-auto" navbar>   
        <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              <i class="fa fa-user-circle-o fa-2x bg-success" style={{borderRadius:"50%"}} aria-hidden="true"></i>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <Link to={"/profile/"+localStorage.getItem('userName')}>Profile</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to={"/dashboard/"+localStorage.getItem('userName')}>Tree</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>  
        </div>
      </Collapse>
    </Navbar>
      }
      </div>
      
    );
}