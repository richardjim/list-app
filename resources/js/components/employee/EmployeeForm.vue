<template>
    <div class="container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <el-page-header @back="goBack" content="detail">
                </el-page-header>
            </div>
            <div>
                <el-form ref="employeeForm" :model="form">
                    <el-row :guuter="10">
                        <el-form-item label="Name" required prop="name">
                            <el-input v-model="form.name" aria-placeholder="Employee Name"></el-input>

                        </el-form-item>
                        <el-form-item label="Department" required prop="department">
                            <el-input v-model="form.department" aria-placeholder="Employee Department"></el-input>

                        </el-form-item>
                        <el-form-item label="Section" required prop="section">
                            <el-input v-model="form.section" aria-placeholder="Section Name"></el-input>

                        </el-form-item>
                        <el-form-item label="Email" required prop="email">
                            <el-input v-model="form.email" aria-placeholder="Email"></el-input>

                        </el-form-item>

                    </el-row>
                    <el-row :guuter="10">
                        <el-form>
                            <el-button type="success" @click="saveForm('employeeForm')">
                                Save
                            </el-button>
                        </el-form>
                    </el-row>
                </el-form>
            </div>
        </el-card>

    </div>
</template>

<script>
export default {
    name: 'employee-form',
    mounted() {
        console.log('Component mounted.')
    },
    data() {
        return {
            form: {
                name: null,
                department: null,
                section: null,
                email: null
            }
        }
    },
    methods: {
        goBack() {
            window.location.href = '/employee';
        },
        saveForm(formName) {
            alert(formName)
        }
    }
}
</script>
