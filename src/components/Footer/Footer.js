// import {
//     Facebook,
//     Instagram,
//     MailOutline,
//     Phone,
//     Pinterest,
//     Room,
//     Twitter,
//   } from '@mui/material/Icon';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PinterestIcon from '@mui/icons-material/Pinterest';
import HouseIcon from '@mui/icons-material/House';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Center, ContactItem, Container, Desc, Left, List, ListItem, Logo, Payment, Right, SocialContainer, SocialIcon, Title } from "./Footer.styled";
  
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>MAHFUZ.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="E60023">
              <PinterestIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <HouseIcon style={{marginRight:"10px"}}/> Dhaka , Bangladesh
          </ContactItem>
          <ContactItem>
            <LocalPhoneIcon style={{marginRight:"10px"}}/> +8801770831744
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{marginRight:"10px"}} /> mahfuzislam@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;