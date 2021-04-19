module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jasmine: {
			test: {
				src: "src/**/*.js",
				options: {
                    display: 'short',
					helpers: "helper/*.js",
                    specs: "spec/**/*.js"
				}
			},
        },
    });

    grunt.loadNpmTasks("grunt-contrib-jasmine");
    
    grunt.registerTask("test", ['jasmine']);
};