namespace $ {

	export function $hyoo_doc_server(args: string[]) {
		const app = $node['express']()
		console.log(app)
		
	}

	setTimeout($mol_fiber_root(() => $mol_fiber_unlimit(() => $hyoo_doc_server(process.argv.slice(2)) as any)))
}
