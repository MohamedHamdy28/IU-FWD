<div class="about-me" id="about-me">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img
    src="../imgs/me.jpg"
    class="me"
    alt="image of me hamody"
    style="float: right;"
  />
  <h2>About me</h2>
  <p class="about-me-paragraph">
    Hi, I'm a machine learning engineer with 2 years of professional experience.
    I'm an expert in solving computer vision and natural language processing
    problems, starting from data collection, annotation, cross-validation,
    building the model, and ending by optimizing the model, performing error
    analysis, and hyperparameter tuning. I have worked at Edge vision and
    Innopolis university as a machine learning engineer.
  </p>

  <h3>My main areas of expertise are:</h3>
  <ul>
    <li>Python, C++, Java</li>
    <li>
      Neural networks, Regression, CNN, Sequence models, K-mean, Object
      detection, Classification, Segmentation
    </li>
    <li>Pytorch, Tensorflow, OpenVINO, OpenCV, SciPy(Numpy, Pandas, etc)</li>
    <li>Docker, PostgreSQL, MongoDB.</li>
  </ul>
</div>

<style>
  .about-me {
    font-family: "Times New Roman", Times, serif;
    font-size: large;
    margin-right: 100px;
    margin-left: 100px;
  }

  .me {
    background: rgb(255, 255, 255);
    border-radius: 50%;
    width: 250px;
    height: 250px;
    border: solid;
    border-color: black;
    border-width: 5px;
    padding: 5px;
  }

  .about-me-paragraph {
    width: 800px;
  }
</style>
