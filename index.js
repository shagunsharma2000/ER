
const router = Router();

router.post('/create', Createcontact);
router.get('/', AllContact);
router.get('/:id', getContactByuserId);
router.put('/updateContact/:id', updateContact);
router.delete('/deleteContact/:id', deleteContact);


export default router;