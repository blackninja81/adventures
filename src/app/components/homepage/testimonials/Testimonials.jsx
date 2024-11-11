import React from "react";
import "./testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="outerdiv">
        <div className="innerdiv">
          {/* Testimonial 1 */}
          <div className="div1 eachdiv">
            <div className="userdetails">
              <div className="imgbox"></div>
              <div className="detbox">
                <p className="name">Daniel Clifford</p>
                <p className="designation">Verified Traveler</p>
              </div>
            </div>
            <div className="review">
              <h4>
                A journey of a lifetime! I discovered places I&apos;d only dreamed
                of.
              </h4>
              <p>
                &quot;I had always wanted to explore the world beyond my comfort
                zone. Signing up for this experience was the best decision! The
                team made sure every detail was perfect, from helping me find
                unique locations to crafting an itinerary tailored to my
                interests. I came back with memories and friendships that will
                last a lifetime. Truly worth every penny!&quot;
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="div2 eachdiv">
            <div className="userdetails">
              <div className="imgbox"></div>
              <div className="detbox">
                <p className="name">Jonathan Walters</p>
                <p className="designation">Verified Traveler</p>
              </div>
            </div>
            <div className="review">
              <h4>An adventure tailored to my every need.</h4>
              <p>
                &quot;I had little travel experience, but the support I received was
                incredible. They patiently guided me through each step of the
                journey, and I felt completely taken care of. Now, I&apos;m a
                confident traveler, exploring new places on my own, and this was
                definitely one of the best investments I&apos;ve made.&quot;
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="div3 eachdiv">
            <div className="userdetails">
              <div className="imgbox"></div>
              <div className="detbox">
                <p className="name dark">Kira Whittle</p>
                <p className="designation dark">Verified Traveler</p>
              </div>
            </div>
            <div className="review dark">
              <h4>Life-changing experiences with fantastic support.</h4>
              <p>
                &quot;I had always dreamed of exploring remote landscapes and
                connecting with local cultures in ways that were both enriching
                and immersive. The opportunity to step into different worlds,
                experience new perspectives, and see things I had only read
                about or seen on screen felt like a dream come true. Thanks to
                the travel team, that dream became a reality. They carefully
                planned every detail, from the itinerary to the smallest
                logistics, ensuring that I could focus on enjoying each moment.
                Their guidance and support throughout the journey were
                unwavering, making me feel safe and well taken care of.&quot;
                <br />
                &quot;The organized tours were not just well-structured but also
                flexible, allowing me to explore at my own pace while also
                ensuring I didn&apos;t miss out on any of the must-see experiences.
                The accommodations were beyond anything I could have imagined,
                providing comfort and style in some of the most unexpected and
                breathtaking places.&quot;
              </p>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="div4 eachdiv">
            <div className="userdetails">
              <div className="imgbox"></div>
              <div className="detbox">
                <p className="name dark">Jeanette Harmon</p>
                <p className="designation dark">Verified Traveler</p>
              </div>
            </div>
            <div className="review dark">
              <h4>An incredible adventure that exceeded my expectations.</h4>
              <p>
                &quot;This experience was unforgettable! From hidden waterfalls to
                local culinary adventures, everything was seamlessly organized.
                I never felt out of place or unprepared. I can&apos;t thank the team
                enough for making this such a rewarding and unforgettable
                experience!&quot;
              </p>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="div5 eachdiv">
            <div className="userdetails">
              <div className="imgbox"></div>
              <div className="detbox">
                <p className="name">Patrick Abrams</p>
                <p className="designation">Verified Traveler</p>
              </div>
            </div>
            <div className="review">
              <h4>A travel experience with unmatched personal attention.</h4>
              <p>
                &quot;The staff genuinely cared about my experience, ensuring I felt
                at home in each destination. Their attention to detail, from
                travel tips to local guides, gave me confidence to embrace each
                part of the journey. It was clear that they are experts who love
                what they do!&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
