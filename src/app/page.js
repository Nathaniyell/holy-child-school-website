"use client";
import Image from "next/image";

import ProprietorImage from "../../public/images/HomePage/pp.jpg";
import Kids from "../../public/images/HolyChildPhotos/DSC_2690.JPG";

// SVG IMPORTS //
import values from "../../public/svg/value.svg";
import Belief from "../../public/svg/Belief.svg";
import vision from "../../public/svg/vision.svg";
import blueStar from "../../public/images/DesignImages/blueStar.png";
import yellowStar from "../../public/images/DesignImages/yellowStar.png";
import redStar from "../../public/images/DesignImages/redStar.png";
import ballon from "../../public/images/DesignImages/ballon.png";

import styles from "./page.module.css";

import { motion } from "framer-motion";

import { Box, Grid, Stack, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

/////// Components ////////////
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import SwiperHomeHeroComponent from "./components/SwiperCarousels/SwiperHomeHero";
import {
  EnrollNowButton,
  ViewAllButton,
  ViewAllWhiteButton,
  ViewGallery,
} from "./components/Buttons/AllButtons";
import {
  MediaCard,
  HeroSectionCarousel,
} from "./components/Carousels/Carousels";
import FloatingStars from "./components/FloatingStars/Stars";
import {
  WovenImageList,
  WovenImageListMobileView,
} from "./components/HomeImageList/ImageList";
import Earth from "./components/gifs/earth/earth";

//////// Icons //////////
import { FcGraduationCap } from "react-icons/fc";
import { GiTrophyCup } from "react-icons/gi";
import { BiSolidBusSchool } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import { FaBook, FaGraduationCap } from "react-icons/fa";
import Link from "next/link";
import {
  HomeHero,
  MediaCardCarousel,
  GalleryCarousel,
} from "./components/SwiperCarousels/Swiper";

export default function Home() {
  const isMobileView = useMediaQuery("(max-width:850px)");

  return (
    <main>
      {/* ////////// SECTION 1 //////////// */}
      <div className={styles.navbar}>
        <Header />
      </div>
      <SwiperHomeHeroComponent />

      {/* /////// Section 2 /////////////// */}
      <div className={styles.section2}>
        <Image src={blueStar} alt="star" className={styles.blueStar1} />
        <Image src={yellowStar} alt="star" className={styles.yellowStar} />
        <Image src={ballon} alt="star" className={styles.ballon} />
        <Image src={redStar} alt="star" className={styles.redStar} />
        <Box
          sx={{
            width: { xs: "90%", md: "70%" },
            margin: "0 auto",
            display: "flex",
            // alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },

            // position: "relative",
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", md: "50%" },
              marginTop: { xs: "2rem", md: "5rem" },
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Why Holy Child?
            </Typography>
            <br />
            <Stack direction="row" spacing={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <div className={styles.icons_div}>
                  <FaGraduationCap
                    style={{ fontSize: "30px", color: "#ffffff" }}
                  />
                </div>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Education
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <div className={styles.icons_div2}>
                  <GiTrophyCup style={{ fontSize: "30px", color: "#ffffff" }} />
                </div>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Pre Nursery
                </Typography>
              </Box>
            </Stack>
            <br />
            <Stack direction="row" spacing={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                  // justifyContent: "space-between",
                }}
              >
                <div className={styles.icons_div3}>
                  <BiSolidBusSchool
                    style={{ fontSize: "30px", color: "#ffffff" }}
                  />
                </div>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Nursery
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <div className={styles.icons_div4}>
                  <HiLightBulb style={{ fontSize: "30px", color: "#ffffff" }} />
                </div>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Primary
                </Typography>
              </Box>
            </Stack>
            <br />
            <Stack direction="row" spacing={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <div className={styles.icons_div5}>
                  <BsPencilSquare
                    style={{ fontSize: "30px", color: "#ffffff" }}
                  />
                </div>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", wordWrap: "none" }}
                  gutterBottom
                >
                  Teacher Training
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <div className={styles.icons_div6}>
                  <FaBook style={{ fontSize: "30px", color: "#ffffff" }} />
                </div>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  Updated Curriculum
                </Typography>
              </Box>
            </Stack>
            <br />
            <Link href="/">
              <ViewAllButton />
            </Link>
          </Box>

          <div className={styles.section2_img}></div>
        </Box>
      </div>

      {/* ////////// Section 3 //////////////// */}
      <div className={styles.section3}>
        <Box sx={{ width: { xs: "90%", md: "80%" }, margin: "0 auto" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                marginTop: { xs: "4rem", md: "7rem" },
                width: { xs: "90%", md: "40%" },
                zIndex: "5",
              }}
            >
              <Typography variant="h3" sx={{ color: "#ffffff" }} gutterBottom>
                Kids Centered Activities
              </Typography>
              <br />
              <Typography sx={{ color: "#ffffff" }} gutterBottom>
                {" "}
                Play based learning occupies a central place in our nursery
                classes. Twice a week, Pre nursery & Nursery 1 children spend
                about 2 hours on the playground. Teachers prepare the
                playground. As children engage in different activities, they
                learn how to interact with each other.{" "}
              </Typography>
              <br />
              <Link href="/teachers">
                <ViewAllWhiteButton />
              </Link>
            </Box>
            <Box
              sx={{
                width: { xs: "95%", md: "40%" },
                maxWidth: "100%",
                maxHeight: "auto",
                // minHeight: "0",
                // minWidth: "0",
                marginTop: { xs: "2rem", md: "7rem" },
                padding: "0 1rem",
              }}
            >
              <MediaCardCarousel />
            </Box>
          </Box>
        </Box>
      </div>

      {/* ////////////// Section 4 //////////// */}
      <div className={styles.section4}>
        <div className={styles.section4_div}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "2rem", md: "0" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: "100%",
                order: { xs: "1", md: "2" },
                marginTop: "2rem",
              }}
            >
              <Image
                src={Kids}
                alt="students"
                className={styles.section4_img}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                marginTop: { xs: "2rem", md: "" },
                position: "inherit",
                zIndex: "1",
                marginTop: "2rem",
              }}
            >
              <Box sx={{ borderRadius: "20% 40% 10%" }}>
                <Typography
                  variant="h4"
                  textAlign="center"
                  sx={{
                    fontWeight: "bold",
                    color: "#e130a7",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                    backgroundColor: "#ffffff",
                  }}
                  gutterBottom
                >
                  SCHOOL DAYS{" "}
                  <Typography className={styles.section4_text}>
                    Mondays - Fridays
                  </Typography>
                </Typography>
              </Box>
              {/* <br /> */}
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  padding: "1.5rem",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                  position: "inherit",
                  zIndex: "4",
                }}
              >
                <Typography gutterBottom>
                  Holy Child Preparatory School was birthed out of a passion to
                  improve the quality of basic Education in South Eastern
                  Nigeria.
                </Typography>
                <Typography gutterBottom>
                  Holy Child Preparatory School, Enugu is positioned to improve
                  the quality of basic education in South East Nigeria through
                  helping children enjoy leisure reading, through emphasis on
                  character development and through continuous teacher education
                  programmes.{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </div>

      {/* ///////////// Section 5 ///////////// */}
      <div className={styles.section5}>
        <div className={styles.section5_div}>
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "#1c1464" }}
            gutterBottom
          >
            GALLERY
          </Typography>

          <Box sx={{}}>
            <GalleryCarousel />
          </Box>

          <br />
          <Link href="/gallery">
            <ViewGallery />
          </Link>
        </div>
      </div>

      {/* //////////// Section 6.0 ////////// */}
      <section className={styles.section6_0}>
        <Box sx={{ width: "80%", margin: "0 auto" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: "#1c1464" }}
            gutterBottom
          >
            Why Choose Holy Child Academy
          </Typography>
          <br />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ width: { xs: "95%", md: "30%" }, margin: "0 auto" }}>
              <Image src={values} alt="Values" className={styles.svg_width} />

              <Typography
                variant="h6"
                fontWeight="bold"
                textAlign={{ xs: "center", md: "center" }}
                gutterBottom
              >
                Our Core Value
              </Typography>

              <Typography
                variant="subtitle2"
                textAlign={{ xs: "center", md: "center" }}
                gutterBottom
              >
                Good character and a love for leisure reading. Objectives: to
                raise children who not only fear God but are able to hold their
                own in any circumstance.
              </Typography>
            </Box>
            <Box sx={{ width: { xs: "95%", md: "30%" }, margin: "0 auto" }}>
              <Image src={Belief} alt="Belief" className={styles.svg_width} />

              <Typography
                variant="h6"
                fontWeight="bold"
                textAlign={{ xs: "center", md: "center" }}
                gutterBottom
              >
                Our Belief
              </Typography>

              <Typography
                variant="subtitle2"
                textAlign={{ xs: "center", md: "center" }}
                gutterBottom
              >
                Talent is not enough. Brilliance must be match by good
                character.
              </Typography>
            </Box>
            <Box sx={{ width: { xs: "95%", md: "30%" }, margin: "0 auto" }}>
              <Image src={vision} alt="Values" className={styles.svg_width} />

              <Typography
                variant="h6"
                fontWeight="bold"
                textAlign={{ xs: "center", md: "center" }}
                gutterBottom
              >
                Our Vision
              </Typography>

              <Typography
                variant="subtitle2"
                textAlign={{ xs: "center", md: "center" }}
                gutterBottom
              >
                To become a first rate educational institution with a reputation
                for excellent character and strong academic learning.
              </Typography>
            </Box>
          </Box>
        </Box>
      </section>

      {/* /////////////// Section 6 ///////////// */}
      <div className={styles.section6}>
        <Box
          sx={{
            width: { xs: "95%", md: "70%" },
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              position: "inherit",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "45%" },
                height: { sm: "auto", md: "70vh" },
                backgroundColor: "#ffffff",
                borderRadius: "60px",
                border: "2px solid #1c1464",
                marginTop: { xs: "2rem", md: "6rem" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                color: "#1c1464",
                padding: "2rem",
                zIndex: "5",
                order: { xs: "2", md: "1" },
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  textAlign="center"
                  gutterBottom
                >
                  Meet our Educational Consultant
                </Typography>

                <Typography
                  variant="h6"
                  textAlign="center"
                  fontWeight="bold"
                  gutterBottom
                >
                  Dr. Mrs. O. Nnamani
                </Typography>
              </Box>
              <Typography variant="subtitle2" gutterBottom>
                B.A English, U.N.N; M.A English, U.N.N, best Graduating Student
                85/ 86 session; Ph.d English, Ebonyi State University,
                Abakaliki. Founder, Holy Child Preparatory School. Senior
                Lecturer, Enugu State University of Sciene & Technology, Enugu.
                1990- Date.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "45%" },
                height: { sm: "auto", md: "40vh" },
                // backgroundColor: "#81d742",
                marginTop: { xs: "2rem", md: "2rem" },
                zIndex: "5",
                order: { xs: "1", md: "2" },
              }}
            >
              <Image
                src={ProprietorImage}
                alt="Proprietor"
                className={styles.ppImage}
              />
            </Box>
          </Box>
        </Box>
      </div>

      {/* ////////// Section 7 /////////////// */}
      <div className={styles.section7}>
        <Box sx={{}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.205064690168!2d7.531379!3d6.451606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a5aae5e5b3d1%3A0xb1a3fb1573962ad7!2sHoly%20Child%20Preparatory%20School!5e0!3m2!1sen!2sus!4v1693227391900!5m2!1sen!2sus"
            style={{
              width: "100%",
              height: "100vh",
              border: "0",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </div>

      <Footer />
    </main>
  );
}
