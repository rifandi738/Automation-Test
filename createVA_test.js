Feature('createVA');
Scenario('test something', ({ I }) => {
    //Login
    I.amOnPage('https://portalbeta.bni-ecollection.com/');
    I.wait(1);
    I.click('#loginButton');
    I.wait(1); 
    I.fillField('#loginform-username', 'rifandi');
    I.fillField('#loginform-password', 'Spe-2022');
    I.wait(1);
    I.click('#login');
    I.waitForNavigation();

    //Create VA
    I.click('VA Management');
    I.wait(2);
    I.see('Create VA', '.sub-menu');
    I.click('Create VA');
    I.wait(4);
    
    I.see('Client');
    I.click('.select2-choice');
    I.selectOption('#createvaform-client_id','8-123-Sekolah A');
    I.wait(2);
    I.fillField('Billing ID', 'Automation-Rifandi-04');
    I.wait(2);
    I.fillField('VA Number', '8123211399043777');
    I.wait(2);
    I.fillField('Name', 'Ahmad Rifandi');
    I.wait(2);
    I.fillField('Email', 'Rifandi-Automation@gmail.com');
    I.wait(2);
    I.fillField('Phone Number', '089675432140');
    I.wait(2);
    I.fillField('Description', 'Skill Test');
    I.wait(2);
    I.selectOption('Billing Type', 'Fixed Payment');
    I.wait(2);
    I.fillField('Billing Amount', '1000');
    I.wait(2);
    I.see('Expiry Datetime');
    I.fillField('Expiry Datetime', '2022-07-30 06:08:30');
    I.wait(2);
    I.see('Create');
    I.click('Create','#create-va');
    I.wait(4);

    //Bulk Upload
    I.click('Bulk Upload');
    I.wait(1);
    I.see('Client');
    I.click('.select2-choice');
    I.selectOption('#bulkuploadform-client_id','8-123-Sekolah A');
    I.wait(1);
    I.click('Next');
    I.attachFile('File', '/bulk-upload/rifandi.csv');
    I.wait(1);
    I.selectOption('Type','Create');
    I.wait(1);
    I.selectOption('Billing Type', 'Fixed Payment');
    I.wait(1);
    I.click('Submit');
    I.wait(2);
    I.click('System Logs');
    I.wait(2);
    I.click('Historical Upload');
    I.wait(3);

    //Report
    I.click('Report');
    I.wait(2);
    I.click('Billing Data');
    I.wait(4);
    I.selectOption('#transactionssearch-request_type','Portal');
    I.pressKey('Enter');
    I.wait(2);
    I.fillField('TransactionsSearch[virtual_account]','8123211399043777');
    I.pressKey('Enter');
    I.wait(2);
    I.fillField('TransactionsSearch[trx_id]','Automation-Rifandi-04');
    I.pressKey('Enter');
    I.wait(2);
    I.selectOption('#transactionssearch-export_excel','csv_semicolon');
    I.click('Download');
    I.saveScreenshot('Sukses.png');
});
