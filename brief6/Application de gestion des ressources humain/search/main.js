$(document).ready(function(){
        $.ajax({method:'GET',
    url:'http://localhost:3000/salarie',success:function(data){
            var output = [];
			console.log(JSON.stringify(data));
			output=JSON.parse(data);
            $.map(output, function(post ,i){
				$('#table_data').append($('<tr>').append($('<td>').append(post.Matricule))
					.append($('<td>').append(post.id))
					.append($('<td>').append(post.nom))
					.append($('<td>').append(post.Prenom))
					.append($('<td>').append(post.Age))
					.append($('<td>').append(post.salaire)));
				});
        }
		});
        $('#search').on("keyup", function(){
            var value = $('#search').val().toLowerCase();
            $("#table_data tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
 })
})