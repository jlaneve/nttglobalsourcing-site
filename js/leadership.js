$('.bio-target').append(leaders.map(l => {
	return (
		`
		<div class="card exec">
			<div class="card-body">
				<div class="row">
					<div class="col-4 text-center avatar-wrapper d-flex">
						<img src="img/${l.img}.png" class="avatar align-middle mx-auto d-block rounded align-self-center" />
					</div>
					<div class="col-8">
						<div class="container">
							<div class="row name">
								${l.name}<span class="title">, ${l.title}</span>
							</div>
							<div class="row email">
								${l.email}
							</div>
							<hr class="extend" />
							<div class="row bio">
								<p>${l.bio1}</p>
								<p>${l.bio2}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`
	);
}));