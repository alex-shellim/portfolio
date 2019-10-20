import React from 'react';
// import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './styling/App.css';
import './styling/Project.css';

import Hero from './images/project/sainsburys-book/sainsburys-book-hero.jpg';
import currentDesign from './images/project/sainsburys-book/sainsburys-book-current.png';
import versionOne from './images/project/sainsburys-book/sainsburys-book-v1.png';
import userHeatmaps from './images/project/sainsburys-book/sainsburys-book-user-heatmaps.jpg';
import mobile1 from './images/project/sainsburys-book/sainsburys-book-mobile-1.png';
import mobile2 from './images/project/sainsburys-book/sainsburys-book-mobile-2.png';

function SainsburysBookASlot(props) {
  return (
    // SAINSBURYS

<div>
  // hero image
	<div class="hero sainsburys-book">
		<img src={Hero}></img>
	</div>
	<div className="project-content">
		<div class="project-overview section">
			<h0>Sainsbury's Book Delivery</h0>
			<p>Improve our user's ease of shop by redsigning a responsive web journey for customers who want to book a slot to have their groceries delivered.</p>
		</div>
		<div class= "project-image-wrap">
			<div class="project-page-image dark">
				<img src={currentDesign}></img>
			</div>
			<span class="caption">Current mobile and desktop design</span>
		</div>
		<div class="section">
			<h2>What problems do we need to solve?</h2>
			<div class="hypothesis-matrix">
				<div>
					<h3>Problem</h3>
                  High bounce rate on mobile book slot page

				</div>
				<div>
					<h3>Hypothesis</h3>
                  By collapsing the delivery information and showing a responsive, scrollable grid of slots higher up the screen, bounce rate will decrease

				</div>
				<div>
					<h3>Measure of success</h3>
                  Bounce rate on mobile

				</div>
			</div>
			<div class="hypothesis-matrix">
				<div>
					<h3>Problem</h3>
                  Users say that delivery is expensive

				</div>
				<div>
					<h3>Hypothesis</h3>
                  By highlighting cheap slots, users perception of delivery costs will increase

				</div>
				<div>
					<h3>Measure of success</h3>
                  Customer Satisfaction Score

				</div>
			</div>
			<div class="hypothesis-matrix">
				<div>
					<h3>Insight</h3>
                  Only 3% of users book click and collect

				</div>
				<div>
					<h3>Hypothesis</h3>
                  By showing fewer days of slots (5 days on desktop), users will locate relevant slots more easily

				</div>
				<div>
					<h3>Measure of success</h3>
                  Conversion

				</div>
			</div>
			<div class="hypothesis-matrix">
				<div>
					<h3>Insight</h3>
                  Over 70% of users book delivery within the next three days

				</div>
				<div>
					<h3>Hypothesis</h3>
                  The removal of the ‘Choose delivery method’ page and defaulting to home delivery will have a positive impact on conversion, and not have a negative impact on collection

				</div>
				<div>
					<h3>Measure of success</h3>
                  Bounce rate, time to book slot, conversion

				</div>
			</div>
		</div>
	</div>
  // hero image
	<div class="hero dark">
		<img src={versionOne}></img>
	</div>
	<div class="hero-caption">
		<span class="caption">Proposed mobile and desktop design</span>
	</div>

	<div class="project-content">
		<div class="section">
			<h2>Designing a solution</h2>
			<p>I took influence from the Sainsbury's iOS app's application of a book a slot grid layout when approaching the design process. I did this for two reasons, firstly it had already been tested so implementing a similar design using the same Sainsbury's Luna design system would remove some unknowns and allow us to move towards MVP faster but I also did this for consistency across products.
            </p>
			<p>Aside from a full visual refresh, the new design focused on simplifying the grid in the following ways:

				<ul>
					<li>Reducing the number of days shown from seven to five to reduce the user's cognitive load. On mobile this is reduced to two although the current mobile site shows only one - we want to allow users to be able to easily compare slots.</li>
					<li>Removal of bulky and unnecessary full address and 'change address' link in favour of a clickable address nickname and postcode on both desktop and mobile</li>
					<li>Highlighting slots with lower delivery cost by using red pricing text.</li>
					<li>Reduce promenence of the 'switch to click and collect' action.</li>
					<li>Additionally including an option to view a calendar date picker - insights showed that users booked slots far in advance during holiday periods so a method of skipping forward weeks at a time would prove useful.</li>
				</ul>
			</p>
		</div>
		<div class="section">
			<h2>Validating the new design</h2>
			<p>I carried out a click-test with around 250 participants to validate the new design&#39;s impact on the user, specifically in two key areas:

				<ul>
					<li>Despite removal of explicit actions to change address and switch to click and collect, the user is still able to perform both tasks without issue on both desktop and mobile</li>
					<li>The user is able to successfully carry out the task of selecting a slot using the new grid system.</li>
				</ul>
			</p>
		</div>
		<div class="section">
			<h2>User test results</h2>
			<h3>Mobile</h3>
			<p>
				<ul>
					<li>
						<strong>98%</strong> of users were successful when being asked to book a specific slot.
					</li>
					<li>
						<strong>74%</strong> of users found the process for deliving a slot very easy,
						<strong>16%</strong> found it easy.
					</li>
					<li>
						<strong>95%</strong> of users identified the correct way to amend their address.
					</li>
					<li>
						<strong>95%</strong> of users identified the correct way to switch to click and collect.
					</li>
					<li>
						<strong>94%</strong> successfully used the navigation or calendar buttons to book a slot in advance.
					</li>
				</ul>
			</p>
			<h3>Desktop</h3>
			<p>
				<ul>
					<li>
						<strong>96%</strong> of users were successful when being asked to book a specific slot.
					</li>
					<li>
						<strong>68%</strong> of users found the process for deliving a slot very easy,
						<strong>23%</strong> found it easy.
					</li>
					<li>
						<strong>69%</strong> of users identified the correct way to amend their address.
					</li>
					<li>
						<strong>89%</strong> of users identified the correct way to switch to click and collect.
					</li>
					<li>
						<strong>96%</strong> successfully used the navigation or calendar buttons to book a slot in advance.
					</li>
				</ul>
			</p>
		</div>
		<div class= "project-image-wrap">
			<div class="project-page-image full-width">
				<img src={userHeatmaps}></img>
			</div>
			<span class="caption">Examples of heatmaps from user testing</span>
		</div>
		<div class="section">
			<h2>Redesigning mobile for accessibility</h2>
			<p>While the desktop and mobile book a slot grid was in development our app team released a similar design on iOS. Shortly afterwards we recieved feedback that users who rely on screen readers were now having difficulty booking a delivery as it was no longer compatible with voiceover.</p>
			<p>Working closely with our Accessibility Manager we carried out further testing and concluded that the mobile grid view should be completely redesigned with accessibility in mind.</p>
			<p>The accessible mobile design would address the following:</p>
			<div class="hypothesis-matrix">
				<div>
					<h3>Problem</h3>
                      Screenreaders are very difficult to use with new grid design.

				</div>
				<div>
					<h3>Hypothesis</h3>
                      Simplify delivery slot display to a list view. Use modals and overlays to move focus onto conformation actions.

				</div>
				<div>
					<h3>Measure of success</h3>
                      Conversion

				</div>
			</div>
			<div class="hypothesis-matrix">
				<div>
					<h3>Insight</h3>
                      Breaking the process into steps is beneficial in general to users with multiple access needs.

				</div>
				<div>
					<h3>Hypothesis</h3>
                      Separate the date selection from the time slot selection.

				</div>
				<div>
					<h3>Measure of success</h3>
                      Conversion

				</div>
			</div>
		</div>
	</div>
  // hero image
	<div class="hero dark">
		<div class="image-flex">
			<div class="flex-image">
				<img src={mobile1}></img>
			</div>
			<div class="flex-image">
				<img src={mobile2}></img>
			</div>
		</div>
	</div>

	<div class="hero-caption">
		<span class="caption">Designed for accessibility</span>
	</div>
	<div class="project-content">
		<div class="section">
			<h2>Validating a new design and next steps</h2>
      <h3>Testing</h3>
      <p>I carried out guerilla testing amongst a small number of customers, with the aim of quantifying the impact a list view would have on our able users.</p>
      <p>I asked subjects to complete two tasks on a grid view booking page and then the same two tasks on the list view.</p>
      <p>
        <strong>Task:</strong> Book a slot at a specific time and date.
            <br></br>
          <strong>Result:</strong> List view and grid both performed well, however list view was preferred by a number of participants.
      </p>
      <p>
        <strong>Task:</strong> Compare slots across three evenings and book the cheapest.
          <br></br>
        <strong>Result:</strong> Grid performed better when comparing slots over multiple days.
      </p>
      <h3>Next steps</h3>
      <p>
        <ul>
          <li>Release accessible list view design on the Sainsbury's iOS app, specifically targeting users with voiceover enabled - the performance of which is still being monitored.</li>
          <li>Develop and release MVP booking design on Sainsbury's Groceries Online. Includes accessible list view on mobile and redesigned grid on desktop.</li>
          <li>Explore implementation of option to filter slots based on price etc, to address pain point identified during comparison of slots.</li>
        </ul>
      </p>
		</div>
	</div>
</div>
  )
}

export default SainsburysBookASlot;
