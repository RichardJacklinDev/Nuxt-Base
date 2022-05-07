<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div class="container">
            <a href="#" class="navbar-brand">Frontend Bootcamp</a>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navmenu"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="#learn" class="nav-link">What You'll Learn</a>
                    </li>
                    <li class="nav-item">
                        <a href="#questions" class="nav-link">Questions</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link">Instructors</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Showcase -->
    <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
            <div class="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1>Become a <span class="text-warning">Web Developer</span></h1>
                    <p class="lead my-4">
                        We focus on teaching our students the fundamentals
                        of the latest and greatest technologies to prepare them
                        for their first dev role
                    </p>
                    <button class="btn btn-primary btn-lg">Start Enrollment</button>
                </div>
                <img
                    class="img-fluid w-50 d-none d-sm-block"
                    src="static/img/showcase.svg"
                    alt="Showcase"
                >
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="bg-primary text-light p-5">
        <div class="container">
            <div class="d-md-flex justify-content-between align-items-centre">
                <h3 class="mb-3 mb-md-0">Sign Up for Our Newsletter</h3>

                <div class="input-group news-input">
                    <input type="text" class="form-control" placeholder="Recipient's username">
                    <button class="btn btn-dark btn-lg" type="button">Enter Email</button>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
    useHead({
        title: 'Frontend Bootcamp'
    })
</script>