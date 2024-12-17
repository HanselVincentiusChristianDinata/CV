import { Navbar, NavbarLink } from "flowbite-react";

const Header = () => {
  return (
    <Navbar
      fluid
      rounded
      className="fixed z-50 top-0 w-full bg-white/30 backdrop-blur-md flex justify-center"
    >
      <Navbar.Collapse>
        <Navbar.Link href="#home" className="text-lg">Home</Navbar.Link>
        <Navbar.Link as={NavbarLink} href="#about" className="text-lg">About Me</Navbar.Link>
        <Navbar.Link href="#skill" className="text-lg">Skills</Navbar.Link>
        <Navbar.Link href="#project" className="text-lg">Project</Navbar.Link>
        <Navbar.Link href="#contact" className="text-lg">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
  