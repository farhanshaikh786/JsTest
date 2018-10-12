describe("Go to the Homepage ", function(){
	browser.ignoreSynchronization=true;
 	
	it("Go to the Home page ", function(){
		browser.get("https://ecs-digital.co.uk/");
		console.log("Home Page Open succesffully")
	});

	it("Go to Enterprise Devops Page ", function(){
		var Enterprise = element(by.css("#post-23 > section.section.alternate.pad-big.text-normal.section-text-no-shadow.section-inner-no-shadow.section-normal.section-opaque > div.container.container-vertical-default > div > div > div.row > div:nth-child(1) > div.col-text-1.text-normal.element-top-20.element-bottom-20 > h3 > a"));
		Enterprise.click();
		browser.sleep(5000)
		console.log("From the Enterprise page go to the Get In Touch Page ");
		element(by.css("#post-36 > section.section.blue-row.text-normal.section-text-no-shadow.section-inner-no-shadow.section-normal.section-opaque > div.container.container-vertical-default > div > div > div.vc_btn3-container.vc_btn3-center > a"));
		browser.sleep(5000)
		console.log("Go to specific Touch Page");
		browser.sleep(5000)
		browser.navigate().back();
	});

});