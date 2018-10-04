var parentDiv = $('#tcards-list');
  var json = [
    {
      "Image" : "https://kari.com/upload/photos2/25/71/06/30/25710630_001.jpg",
      "Name" : "Shoes",
      "Price" : "10",
      "Amount" : "2"
    },
    {
      "Image" : "https://cdn1.slamjamsocialism.com/138643/wool-coat.jpg",
      "Name" : "Coat",
      "Price" : "200",
      "Amount" : "1"
    },
    {
      "Image" : "http://s3.weddbook.com/t4/2/3/1/2316658/child-fedora-hat-toddler-fedora-hat-baby-fedora-hat-boys-fedora-girls-fedora-gray-fedora-hat.jpg",
      "Name" : "Grey Hat",
      "Price" : "SOLD",
      "Amount" : "1"
    },    
    
  ]
  var template = '<div class="trade-staff" style="border:1px solid black;">\
    <ul class="list-inline">\
      <li><a href="#"><img src="%IMAGE%" width="100" class="img-circle"></a></li>\
      <li>\
        <ul class="list-unstyled">\
          <li>Name : %NAME%</a></li>\
          <li>Amount : %AMOUNT%</li>\
          <li>PRICE : $ %PRICE%</li>\
        </ul>\
      </li>\
    </ul>\
  </div>';

  for (var i = 0; i < json.length; ++i)
  {
    var image = json[i].Image;
    var amount = json[i].Amount;
    var price  = json[i].Price;
    var name  =  json[i].Name;
    
    var divContent = template.replace("%IMAGE%", image).replace('%NAME%', name).replace('%AMOUNT%', amount).replace('%PRICE%', price);

    parentDiv.append(divContent);
  }
