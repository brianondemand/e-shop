import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Rolling Papers</Link>
            <Link href="#">Zip Locks</Link>
            <Link href="#">Grinders</Link>
            <Link href="#">Bongs</Link>
            <Link href="#">Filter Papers</Link>
            <Link href="#">Ash Trays</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchange</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
