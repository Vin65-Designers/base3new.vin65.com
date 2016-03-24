//Modal Doc

// Init a new modal
// vin65.modal.open(path,options,payload);

var vin65Modal = function(element,path,title,options,payload){
  this.options = options
  this.$body = $(document.body)
  this.$element = $(element)
  this.$modal = $(document.body).find('[v65js=modal]')
  this.$backdrop = $(document.body).find('[v65js=backdrop]')
  this.isShown = null
  this.path = path
  this.payload = payload
  this.title = title
};

vin65Modal.prototype.show = function() {  
  //Show logic
  if (this.isShown){
    return false;
  }  
  this.isShown = true;
  
  if(this.title){
    this.$modal.find("[v65js=modalTitle]").html(this.title);
  }

  this.$body.addClass('v65-modalOpen');
  this.$modal.addClass('v65-active');
  this.$backdrop.addClass('v65-active');
  this.loadRemote();
  this.escape();
};

vin65Modal.prototype.loadRemote = function() {
  $.ajax({
    url: this.path,
    cache: false,
    dataType: "html",
    success: function(data) {
        $(".v65-modalContent").html(data);
    }
  });
};

vin65Modal.prototype.hide = function() {
  this.$modal.removeClass('v65-active');
  this.$backdrop.removeClass('v65-active');
};

vin65Modal.prototype.escape = function() {
  if (this.isShown) {
    this.$element.on('keydown', $.proxy(function (e) {
      e.which == 27 && this.hide()
    }, this))
  } else if (!this.isShown) {
    this.$element.off('keydown')
  }
};

vin65.modal={
  instance:null,
  init:function() {
    
    var template = [
    "<div class='v65-modal' v65js='modal'>",
      "<div class='v65-modalBar'>",
        "<div class='v65-modalClose' v65js-click='vin65.modal.closeModal()'></div>",
        "<h4 class='v65-modalTitle' v65js='modalTitle'></h4>",
      "</div>",
      "<div class='v65-modalContent'></div>",
    "</div>",
    "<div v65js-click='vin65.modal.closeModal()' v65js='backdrop' class='v65-modalBackdrop'></div>"].join("\n");
    
    $(document.body).append(template);
  },
  open:function(path,title,payload){
    var payload = typeof payload !== 'undefined' ?  payload : {},
    options = typeof options !== 'undefined' ?  options : {};

    vin65.modal.instance = new vin65Modal(this,path,title,options,payload);
    
    vin65.modal.instance.show();
  },
  closeModal: function() {
    vin65.modal.instance.hide();
  }
}

$(document).ready(function() {
  vin65.modal.init();
})
