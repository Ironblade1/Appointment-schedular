import React from 'react'

export default function Home() {
	return (
		// <div style={{"backgroundColor": "#007bff"}}>
		// 	<Container style={{"backgroundColor": "white"}}>
		// 		<br />
		// 		<img style={{"alignContent": "center", "width": "50%", "box-shadow":"5px 10px #888888"}} src="https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
		// 	</Container>
		// </div>

		<>
			<title>My Web Page</title>
			{/* <link rel="stylesheet" type="text/css" href="style.css"> */}
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
				integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
				crossOrigin="anonymous"
			/>
			<style
				dangerouslySetInnerHTML={{
					__html:
						"\n\t\t.flex-container {\n\t\tdisplay: flex;\n\n\t\t}\n\n\t\t.flex-container > div {\n\t\tbackground-color: #f1f1f1;\n\t\tmargin: 10px;\n\t\tpadding: 20px;\n\t\tfont-size: 30px;\n\t\t}\n\t\t.button-container {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\theight: 75vh;\n\t\t}\n\n\t\t.button {\n\t\t\tmargin: auto;\n\t\tpadding: 12px 24px;\n\t\tfont-size: 16px;\n\t\tfont-weight: bold;\n\t\tborder: none;\n\t\tborder-radius: 4px;\n\t\tcolor: #fff;\n\t\tbackground-color: #007bff;\n\t\tcursor: pointer;\n\t\ttransition: all 0.3s ease;\n\t\t}\n\n\t\t.button:hover {\n\t\tbackground-color: #0062cc;\n\t\t}\n\n\t"
				}}
			/>
			<section className="py-5">
				<div className="container pt-5 text-center">
					<h1 className="font-size-42 mb-3">
					Schedule Appointments with Our Expert Gym Trainers
					</h1>
					<p className="font-size-large text-center">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto obcaecati, veniam magnam at animi nobis?
					</p>
					<div className="row justify-content-center align-items-center">
						<div className="col-xxl-5 col-lg-6 text-left order-0 order-lg-1 offset-xxl-1">
							<h3 className="display-5 font-weight-bold">
								Book Appointment
							</h3>
							<p className="mb-xl-3">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quisquam iure ullam, praesentium perspiciatis blanditiis vel inventore, possimus nam eligendi accusantium alias eius similique? Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
							</p>
							<div>
								<a
									className="btn btn-lg btn-primary m-0 text-capitalize"
									ga360location="content_4_buttonLink_1"
									href="/AppointmentList"
								>
									<div
										className="d-flex align-items-center justify-content-center"
										onclick="buttonClicked(1)"
									>
										<img
											src="https://www.media.io/images/images2022/media-feature/btn-icon.svg"
											alt=""
											className="img-fluid mr-2"
										/>
										<div>Book Appointment</div>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-6  pt-4 pt-xl-0">
							<img
								src="https://media.istockphoto.com/id/1401009134/photo/fitness-woman-and-man-giving-each-other-a-fist-bump-after-the-training-session-while-sitting.jpg?s=612x612&w=0&k=20&c=nDy5XhJBR0Cbn-Ce3vtHo5oj63uNCOYyNfUEtZNVyeY="
								alt="voice to text to instead handwriting"
								className="img-fluid w-100"
							/>
						</div>
					</div>
					<div className="row justify-content-center align-items-center">
						<div className="col-xxl-5 col-lg-6 text-left">
							<h3 className="display-5 font-weight-bold">
							Why Choose Us?
							</h3>
							<p className="mb-xl-2">
								<b>*</b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt rerum quos veritatis distinctio ipsa
							</p>
							<p className="mb-xl-2">
							<b>*</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim laboriosam autem dicta aliquam, accusantium totam repudiandae cum reiciendis?
							</p>
							<p className="mb-xl-2">
							<b>*</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta magni tenetur a commodi saepe quae similique quas voluptatem.
							</p>
							<div>
								
							</div>
						</div>
						<div className="col-lg-6 offset-xxl-1 pt-4 pt-xl-0">
							<img
								src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
								alt=""
								className="img-fluid w-100"
							/>
						</div>
					</div>
					<div className="row justify-content-center align-items-center pt-5 mt-3 pb-md-4">
						<div className="col-xxl-5 col-lg-6 text-left order-0 order-lg-1 offset-xxl-1">
							<h3 className="display-5 font-weight-bold">
								Lorem, ipsum dolor sit amet consectetur adipisicing.
							</h3>
							<p className="mb-xl-3">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, explicabo quae totam ratione nam ut porro dolorum autem placeat sint sapiente optio error sequi illo deserunt assumenda. Magnam, nulla laboriosam.
							</p>
							<div>
						
							</div>
						</div>
						<div className="col-lg-6  pt-4 pt-xl-0">
							<img
								src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="transcribe youTube video contents"
								className="img-fluid w-100"
							/>
						</div>
					</div>
				</div>
			</section>
		</>


	)
}
