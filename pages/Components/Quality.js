import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Quality = () => {
  return (
    <div className="h-screen  bg-zinc-900 py-2 px-32">
      <div className="text-white justify-center flex p-10 font-extrabold text-4xl">
      Why Should you hire me as Developer
      </div>
      <div className="p-7 bg-white h-60  rounded-lg flex">
        <img
          src="./images/psycho.jpg"
          alt="Image"
          className="object-cover object-center"
        />
        <button></button>
        <div className="text-center text-xl">
          <p className="text-sm px-10 py-1">
            I don't know exactly what you guys need, but one thing I'd say is
            I'll make myself useful ¯\_(ツ)_/¯
          </p>
          <p className="text-sm px-10 py-1">
            I'm always to willing to put in the effort and make sure things are
            done well and efficiently
          </p>
          <p className="text-sm px-10 py-1">
            I love dabbling in new developer tooling and building new projects.
            When I'm not, I'm either with friends, family, or focusing on my own
            health
          </p>
          <p className="text-sm px-10 py-1">
            I'm both technical and can communicate well. I've done sales and
            development work in the past, so I'm well versed in both.
          </p>
        </div>
      </div>

      <div className="py-10">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Why should we hire you?
          </AccordionSummary>
          <AccordionDetails>
            I like building too!!! I also like tackling the unknown, and I'm
            always up for any challenge.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            What are your strengths and weaknesses as a developer?
          </AccordionSummary>
          <AccordionDetails>
            I'd say a good strength of mine is the ability to be wrong and
            taking responsiblity. I'd be comfortable with admitting my faults
            and be open to constructive feedback. A weakness of mine is that I'm
            not the fastest at learning and I tend to overthink a lot (working
            on it). In the end, however, I always make progress and move
            forward.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            How do you stay updated with the latest web development trends?
          </AccordionSummary>
          <AccordionDetails>
            I'm fortunate to have a network of friends in startups and venture
            capital. Their insights and feedback keep me informed about the
            latest trends in tech!
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            So... What do you do in your free time?
          </AccordionSummary>
          <AccordionDetails>
            I literally just start building interesting projects. I have a list
            of ideas in my notes and refer to them. It's pretty much all I do in
            my free time. I also like lifting weights, running, and finding time
            to hang with friends/family (need to improve on spending more time
            w/ friends though..)
          </AccordionDetails>
        </Accordion>
      </div>

    </div>
  );
};

export default Quality;
