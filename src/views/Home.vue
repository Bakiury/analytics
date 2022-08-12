<script setup lang="ts">
import { ref } from 'vue';
import ChartDoughnut from '../components/ChartDoughnut.vue';
import ChartBar from '../components/ChartBar.vue';
import ChartLine from '../components/ChartLine.vue';

const data = ref([1, 2, 3, 4]);
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Hidden brand</a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div class="d-flex">
        <div class="card m-2">
            <div class="card-body">
                <ChartDoughnut />
            </div>
        </div>

        <div class="card m-2">
            <div class="card-body">
                <ChartBar />
            </div>
        </div>

        <div class="card m-2">
            <div class="card-body">
                <ChartLine />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>