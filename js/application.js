function WebmailViewModel() {
    // Data
    var self = this;
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    self.chosenFolderData = ko.observable();
    self.chosenMailData = ko.observable();

    // Behaviours    
    self.goToFolder = function (folder) { 
        history.pushState({foo: "bar"},"foobar", "/" + folder); 
    };
    self.goToMail = function (mail) { 
        location.hash = mail.folder + '/' + mail.id
    };

    // Client-side routes    
    Davis(function () {
        this.get('/:folder', function () {
            self.chosenFolderId(this.params.folder);
            self.chosenMailData(null);
            $.get("/mail.php", { folder: this.params.folder }, self.chosenFolderData);
        });

        this.get('/:folder/:mailId', function () {
            self.chosenFolderId(this.params.folder);
            self.chosenFolderData(null);
            $.get("/mail.php", { mailId: this.params.mailId }, self.chosenMailData);
        });

        this.get('', function () { 
            this.app.runRoute('get', '#Inbox') 
        });
    }).start();
};

ko.applyBindings(new WebmailViewModel());
