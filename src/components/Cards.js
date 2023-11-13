import React from 'react'
import '../Card.css';
export default function Cards() {
  return (
    <>
      <div className=' d-flex gap-2  ' style={{ width: '70rem', height: '20rem', margin: 'auto' }}>
        <div class="card " style={{ width: '200rem', backgroundColor: '#a41034' }}>
          <div class="card-body">
            <h5 class="card-title text-white fw-bold fs-3">Learn the World</h5>
            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <p class="card-tex text-white">Lifelong learning is an extension of classrooms,
              books and theories. The DNA of Centurion is to offer ramps and ladders for multiple entry
              and exit by adopting and adapting National Credit Framework.
            </p>
          </div>
        </div>
        <div class="card " style={{ width: '200rem', backgroundColor: '#ffb2c6' }}>
          <div class="card-body">
            <h5 class="card-title fw-bold fs-3 text-#050100">Experience the World</h5>
            <p class="card-tex text-#050100">The appropriate balance of knowledge and skills is the key to making a real difference.
              Centurion learning labs are real-time market linked production hubs for immersive and competency linked education deliveries.
            </p>
          </div>
        </div>
        <div class="card " style={{ width: '200rem', backgroundColor: '#a41034' }}>
          <div class="card-body">
            <h5 class="card-title  fw-bold fs-3 text-white">Change the World</h5>
            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <p class="card-tex text-white">The university and our students must transform societies and
              communities within which it exists
              change begins with us and from within. The Centurion survives and
              thrives on disruptions and relevant innovations to co-create a holistic learning ecosystem.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center text-decoration-underline mt-3">-Choose a Subject area:-</h3>
      </div>
      <br/>
      <div className='Course '>
        <div class="card-course col-3 ">
          <div class="card-body">
            Graduate
          </div>
        </div>

        <div class="card-course col-3 ">
          <div class="card-body">
            Post Graduate
          </div>
        </div>
        <div class="card-course col-3 ">
          <div class="card-body">
            Doctoral
          </div>
        </div>
      </div>
      <div className='cource2'>
        <div class="card-course col-3 ">
          <div class="card-body">
            Diploma
          </div>
        </div>
        <div class="card-course col-3 ">
          <div class="card-body">
            Certificate
          </div>
        </div>
        <div class="card-course col-3 ">
          <div class="card-body">
            Schools in CUTM
          </div>
        </div>
      </div>
      <div className='feature-container'>
        <div className='featured-cource '>
          <div class="card" style={{ width: '18rem' }}>
            <img src=" https://cutm.ac.in/wp-content/uploads/How-to-Create-an-Effective-Resume-for-a-Campus-Interview-1024x536.jpg" alt="..." />
            <div class="card-body">
              <h5 class="card-title">How to Create an Effective Resume for a Campus Interview</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Known more<i class="fas fa-angle-double-right" aria-hidden="true"></i></a>
            </div>
          </div>
          <div class="card" style={{ width: '18rem' }}>
            <img src=" https://cutm.ac.in/wp-content/uploads/Which-Jobs-Can-You-Take-Up-After-Studying-Microbiology-1024x536.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Which Jobs Can You Take Up After Studying Microbiology?</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Known more<i class="fas fa-angle-double-right" aria-hidden="true"></i></a>
            </div>
          </div>
          <div class="card" style={{ width: '18rem' }}>
            <img src=" https://cutm.ac.in/wp-content/uploads/What-are-Some-Top-Career-Options-in-Agriculture-1024x536.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">What are Some Top Career Options in Agriculture?</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Known more<i class="fas fa-angle-double-right" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
